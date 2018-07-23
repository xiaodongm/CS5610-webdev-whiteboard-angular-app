export class WidgetServiceClient {
  findWidgetsForTopic(topicId) {
    return fetch('https://webdev-summerfull-2018-xma.herokuapp.com/api/topic/' + topicId + '/widget')
      .then(response => response.json());
  }
}
