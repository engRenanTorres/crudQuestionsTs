import {
	addDoc,
	collection,
	/*   query,
  onSnapshot, */
	doc,
	updateDoc,
	deleteDoc,
	getDocs,
} from 'firebase/firestore';
import { db } from '../libs/firebase';
import { Question } from '../types/Question';

const createDocument = async (col:string, doc:Question) => {
	try {
		const docRef = await addDoc(collection(db, col), doc);

		return docRef;
	} catch (error) {
		// error under useUnknownInCatchVariables 
		if (typeof error === 'string') {
			error.toUpperCase(); // works, `e` narrowed to string
		} else if (error instanceof Error) {
			error.message; // works, `e` narrowed to Error
		}
	}
};

const readDocuments = async (col:string) => {
	const docs: Array<Question> = [];

	const querySnapshot = await getDocs(collection(db, col));

	querySnapshot.forEach((doc) => {
		const id = doc.id;
		const data = doc.data();

		docs.push({ 
			id: id,
			banca: data.banca,
			nivel: data.nivel,
			cargo: data.cargo,
			concurso: data.concurso,
			ano:  data.ano,
			assunto: data.assunto,
			enunciado: data.enunciado,
			alternativas: data.alternativas,
			resposta: data.resposta,
			observacao: data.observacao
		});
	});

	return docs;
};

/* const readDocumentsRealTime = (col : string, fn: Function) => {
  const queryConstraints:Array<Question> = [];

  const collectionRef = collection(db, col);

  const firestoreQuery = query(collectionRef, ...queryConstraints);

  onSnapshot(firestoreQuery, (querySnapshot) => {
    const docs: Array<Question> = [];

    querySnapshot.forEach((doc) => {
      const id = doc.id;
      const data = doc.data();

      docs.push({  
        id: id,
        banca: data.banca,
        nivel: data.nivel,
        cargo: data.cargo,
        concurso: data.concurso,
        ano:  data.ano,
        assunto: data.assunto,
        enunciado: data.enunciado,
        alternativas: data.alternativas,
        resposta: data.resposta,
        observacao: data.observacao});
    });

    fn(docs);
  });
}; */

const updateDocument = async (col:string, id:string, document:Question ) => {
	try {
		const docRef = doc(db, col, id);

		const updatedDoc = await updateDoc(docRef, document);

		return updatedDoc;
	} catch (error) {
		// error under useUnknownInCatchVariables 
		if (typeof error === 'string') {
			error.toUpperCase(); // works, `e` narrowed to string
		} else if (error instanceof Error) {
			error.message; // works, `e` narrowed to Error
		}
	}
};

const deleteDocument = async (col:string, id:string) => {
	try {
		const docRef = doc(db, col, id);

		await deleteDoc(docRef);
	} catch (error) {
		// error under useUnknownInCatchVariables 
		if (typeof error === 'string') {
			error.toUpperCase(); // works, `e` narrowed to string
		} else if (error instanceof Error) {
			error.message; // works, `e` narrowed to Error
		}
	}
};

export {
	createDocument,
	readDocuments,
	/*   readDocumentsRealTime, */
	updateDocument,
	deleteDocument,
};