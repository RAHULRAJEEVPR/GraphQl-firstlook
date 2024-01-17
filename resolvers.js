class Course {
    constructor(id, {
      courseName, category, price, language, email, stack, teachingAssists
    }) {
      this.id = id;
      this.courseName = courseName;
      this.category = category;
      this.price = price;
      this.language = language;
      this.email = email;
      this.stack = stack;
      this.teachingAssists = teachingAssists;
    }
  }
  
  const courseholder = {};
  
  const resolvers = {
    getCourse: (id) => {
        console.log(id);
        console.log(courseholder);
      return new Course(id, courseholder[id]);
    },
    createCourse: async ({ input }) => {
    //   const { nanoid } = await import('nanoid');
  
      let id = "asdasdfaf"+Date.now();
      courseholder[id] = input;
      console.log(courseholder);
      console.log("..............");
      return new Course(id, input);
    },
  };
  
  export default resolvers;
  