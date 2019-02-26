import { firebase } from '../firebase';

export const DataService = {
  lessons: [],
  getLessons() {
    // const [value, setValue] = useState(() => false);

    return firebase
      .database()
      .ref('/lessons')
      .once('value')
      .then(snapshot => {
        this.lessons = snapshot.val();
        // setValue(snapshot.val());
        console.log(snapshot.val());
      });
  }
};
