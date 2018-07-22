export class LessonServiceClient {
  findLessonsForModule(courseId, moduleId) {
    return fetch('https://webdev-summerfull-2018-xma.herokuapp.com/api/course/' + courseId + '/module/' + moduleId + '/lesson')
      .then(response => response.json());
  }
}
