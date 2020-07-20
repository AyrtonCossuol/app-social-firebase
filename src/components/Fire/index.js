import firebaseConfig from "../../config/firebaseConfig";
import * as firebase from "firebase";
import "firebase/firestore";

class Fire {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    console.ignoredYellowBox = true;
  }

  addPost = async ({ text, localUri, likes, comments }) => {
    this.uploadPhotoAsync(localUri)
      .then((uri) => {
        new Promise(async (res, rej) => {
          const response = await firebase
            .firestore()
            .collection("posts")
            .doc(this.uid)
            .set({
              posts: [
                {
                  text,
                  likes,
                  comments,
                  uid: this.uid,
                  timestamp: this.timestamp,
                  image: uri,
                },
              ],
            });
          this.userInfos.get().then((resp) => {
            resp = resp.data();
            console.log(resp, " e ", resp.posts);
            firebase
              .firestore()
              .collection("users")
              .doc(this.uid)
              .update({
                posts: resp.posts + 1,
              })
              .then(() => {});
          });

          return res(response);
        });
      })
      .catch((err) => {
        rej(err);
        console.log("erro : ", err);
      });
  };

  uploadPhotoAsync = async (uri) => {
    const path = `photos/${this.uid}/${Date.now()}.jpg`;

    const response = await fetch(uri);
    const file = await response.blob();

    return new Promise(async (res, rej) => {
      firebase
        .storage()
        .ref(path)
        .put(file)
        .on(
          "state_changed",
          (snapshot) => {},
          (err) => {
            rej(err);
          },
          async () => {
            const url = await firebase
              .storage()
              .ref(path)
              .put(file)
              .snapshot.ref.getDownloadURL();
            res(url);
          }
        );
    });
  };

  sendMessage = (messages) => {
    messages.forEach((item) => {
      const message = {
        text: item.text,
        timestamp: this.timestamp,
        user: item.user,
      };

      this.db.push(message);
    });
  };

  parse = (message) => {
    const { user, text, timestamp } = message.val();
    const { key: _id } = message;
    const createdAt = new Date(timestamp);

    return {
      _id,
      createdAt,
      text,
      user,
    };
  };

  get = (callback) => {
    this.db.on("child_added", (snapshot) => callback(this.parse(snapshot)));
  };

  off() {
    this.db.off();
  }

  get userData() {
    return firebase.auth().currentUser;
  }

  get userInfos() {
    return firebase.firestore().collection("users").doc(this.uid);
  }

  get db() {
    return firebase.database().ref("messages");
  }

  get singOut() {
    return firebase.auth().signOut();
  }

  get firestore() {
    return firebase.firestore();
  }

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  get timestamp() {
    return Date.now();
  }
  get fakeData() {
    return [
      {
        login: "kevwil",
        id: 35,
        node_id: "MDQ6VXNlcjM1",
        avatar_url: "https://avatars2.githubusercontent.com/u/35?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/kevwil",
        html_url: "https://github.com/kevwil",
        followers_url: "https://api.github.com/users/kevwil/followers",
        following_url: "https://api.github.com/users/kevwil/following{/other_user}",
        gists_url: "https://api.github.com/users/kevwil/gists{/gist_id}",
        starred_url: "https://api.github.com/users/kevwil/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/kevwil/subscriptions",
        organizations_url: "https://api.github.com/users/kevwil/orgs",
        repos_url: "https://api.github.com/users/kevwil/repos",
        events_url: "https://api.github.com/users/kevwil/events{/privacy}",
        received_events_url: "https://api.github.com/users/kevwil/received_events",
        type: "User",
        site_admin: false
      },
      {
        login: "KirinDave",
        id: 36,
        node_id: "MDQ6VXNlcjM2",
        avatar_url: "https://avatars2.githubusercontent.com/u/36?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/KirinDave",
        html_url: "https://github.com/KirinDave",
        followers_url: "https://api.github.com/users/KirinDave/followers",
        following_url: "https://api.github.com/users/KirinDave/following{/other_user}",
        gists_url: "https://api.github.com/users/KirinDave/gists{/gist_id}",
        starred_url: "https://api.github.com/users/KirinDave/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/KirinDave/subscriptions",
        organizations_url: "https://api.github.com/users/KirinDave/orgs",
        repos_url: "https://api.github.com/users/KirinDave/repos",
        events_url: "https://api.github.com/users/KirinDave/events{/privacy}",
        received_events_url: "https://api.github.com/users/KirinDave/received_events",
        type: "User",
        site_admin: false
      },
      {
        login: "jamesgolick",
        id: 37,
        node_id: "MDQ6VXNlcjM3",
        avatar_url: "https://avatars2.githubusercontent.com/u/37?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/jamesgolick",
        html_url: "https://github.com/jamesgolick",
        followers_url: "https://api.github.com/users/jamesgolick/followers",
        following_url: "https://api.github.com/users/jamesgolick/following{/other_user}",
        gists_url: "https://api.github.com/users/jamesgolick/gists{/gist_id}",
        starred_url: "https://api.github.com/users/jamesgolick/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/jamesgolick/subscriptions",
        organizations_url: "https://api.github.com/users/jamesgolick/orgs",
        repos_url: "https://api.github.com/users/jamesgolick/repos",
        events_url: "https://api.github.com/users/jamesgolick/events{/privacy}",
        received_events_url: "https://api.github.com/users/jamesgolick/received_events",
        type: "User",
        site_admin: false
      },
      {
        login: "atmos",
        id: 38,
        node_id: "MDQ6VXNlcjM4",
        avatar_url: "https://avatars3.githubusercontent.com/u/38?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/atmos",
        html_url: "https://github.com/atmos",
        followers_url: "https://api.github.com/users/atmos/followers",
        following_url: "https://api.github.com/users/atmos/following{/other_user}",
        gists_url: "https://api.github.com/users/atmos/gists{/gist_id}",
        starred_url: "https://api.github.com/users/atmos/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/atmos/subscriptions",
        organizations_url: "https://api.github.com/users/atmos/orgs",
        repos_url: "https://api.github.com/users/atmos/repos",
        events_url: "https://api.github.com/users/atmos/events{/privacy}",
        received_events_url: "https://api.github.com/users/atmos/received_events",
        type: "User",
        site_admin: false
      },
      {
        login: "errfree",
        id: 44,
        node_id: "MDEyOk9yZ2FuaXphdGlvbjQ0",
        avatar_url: "https://avatars2.githubusercontent.com/u/44?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/errfree",
        html_url: "https://github.com/errfree",
        followers_url: "https://api.github.com/users/errfree/followers",
        following_url: "https://api.github.com/users/errfree/following{/other_user}",
        gists_url: "https://api.github.com/users/errfree/gists{/gist_id}",
        starred_url: "https://api.github.com/users/errfree/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/errfree/subscriptions",
        organizations_url: "https://api.github.com/users/errfree/orgs",
        repos_url: "https://api.github.com/users/errfree/repos",
        events_url: "https://api.github.com/users/errfree/events{/privacy}",
        received_events_url: "https://api.github.com/users/errfree/received_events",
        type: "Organization",
        site_admin: false
      },
      {
        login: "mojodna",
        id: 45,
        node_id: "MDQ6VXNlcjQ1",
        avatar_url: "https://avatars2.githubusercontent.com/u/45?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/mojodna",
        html_url: "https://github.com/mojodna",
        followers_url: "https://api.github.com/users/mojodna/followers",
        following_url: "https://api.github.com/users/mojodna/following{/other_user}",
        gists_url: "https://api.github.com/users/mojodna/gists{/gist_id}",
        starred_url: "https://api.github.com/users/mojodna/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/mojodna/subscriptions",
        organizations_url: "https://api.github.com/users/mojodna/orgs",
        repos_url: "https://api.github.com/users/mojodna/repos",
        events_url: "https://api.github.com/users/mojodna/events{/privacy}",
        received_events_url: "https://api.github.com/users/mojodna/received_events",
        type: "User",
        site_admin: false
      },
      {
        login: "bmizerany",
        id: 46,
        node_id: "MDQ6VXNlcjQ2",
        avatar_url: "https://avatars2.githubusercontent.com/u/46?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/bmizerany",
        html_url: "https://github.com/bmizerany",
        followers_url: "https://api.github.com/users/bmizerany/followers",
        following_url: "https://api.github.com/users/bmizerany/following{/other_user}",
        gists_url: "https://api.github.com/users/bmizerany/gists{/gist_id}",
        starred_url: "https://api.github.com/users/bmizerany/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/bmizerany/subscriptions",
        organizations_url: "https://api.github.com/users/bmizerany/orgs",
        repos_url: "https://api.github.com/users/bmizerany/repos",
        events_url: "https://api.github.com/users/bmizerany/events{/privacy}",
        received_events_url: "https://api.github.com/users/bmizerany/received_events",
        type: "User",
        site_admin: false
      },
    ];
  }
}

Fire.shared = new Fire();

export default Fire;
