export class TweetService {
  getTweets() {
    return [
      {
        title: "yadda",
        author: "@foobar",
        text: "yadda yadda yadda",
        liked: true,
        likesCounter: 2
      }, {
        title: "blah",
        author: "@bar",
        text: "blah blah blah",
        liked: false,
        likesCounter: 8
      }, {
        title: "bleep",
        author: "@foo",
        text: "bleep bleep bleep",
        liked: true,
        likesCounter: 5
      }
    ]
  }
}