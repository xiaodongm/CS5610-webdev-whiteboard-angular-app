export class TopicServiceClient {
  findTopicsForLesson(courseId, moduleId, lessonId) {
    return fetch('https://webdev-summerfull-2018-xma.herokuapp.com/api/course/' + courseId + '/module/' + moduleId + '/lesson/'
      + lessonId + '/topic')
      .then(response => response.json());
  }
}
