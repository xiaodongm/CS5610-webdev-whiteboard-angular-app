export class SectionServiceClient {

  SECTION_URL = 'http://localhost:4000/api/course/COURSEID/section';

  findSectionsForStudent(userId) {
    const url = 'http://localhost:4000/api/student/' + userId + '/section';
    return fetch(url, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  enrollStudentInSection(userId, sectionId) {
    const url = 'http://localhost:4000/api/student/' + userId + '/section/' + sectionId;
    return fetch(url, {
      method: 'post',
      credentials: 'include'
    });
  }

  deleteSection(sectionId) {
    const url = 'http://localhost:4000/api/section/' + sectionId;
    return fetch(url, {
      method: 'delete'
    });
  }

  updateSection(section) {
    return fetch('http://localhost:4000/api/section/' + section._id, {
      method: 'put',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  unEnrollSection(userId, sectionId) {
    const url = 'http://localhost:4000/api/student/' + userId + '/section/' + sectionId;
    return fetch(url, {
      method: 'delete',
      credentials: 'include',
    });
  }

  findSectionsForCourse(courseId) {
    return fetch(this.SECTION_URL.replace('COURSEID', courseId))
      .then(response => response.json());
  }

  createSection(courseId, name, seats) {
    const section = {courseId, name, seats};
    return fetch(this.SECTION_URL.replace('COURSEID', courseId), {
      method: 'post',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
