export const comment = () => {
    window.location.hash = "comment";
};
export const commentNew = (id, comments) => {
    firebase
    .firestore()
    .collection('post')
    .doc(id)
    .update({
        user_id: firebase.auth().currentUser.uid,
        date: firebase.firestore.Timestamp.fromDate(new Date()).toDate().toLocaleString('pt-BR'),
        coments: comments,
    })
}