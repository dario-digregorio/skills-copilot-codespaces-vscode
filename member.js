function skillsMember() {
  return {
    name: 'John Doe',
    skills: ['Javascript', 'React', 'HTML', 'CSS'],
    showSkills() {
      this.skills.forEach(skill => {
        console.log(`${this.name} knows ${skill}`);
      });
    }
  };
}