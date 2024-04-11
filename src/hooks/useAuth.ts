// import { doc, updateDoc } from "firebase/firestore";
// import { useState } from "react";

// export const useUpdateActiveUser = () => {
//    const [error, setError] = useState<string | null>(null);

//    const updateActiveUserById = async (idUser: string) => {
//       setError(null);

//       try {
//          const userDocRef = doc(db, "users", idUser);
//          // Set the "capital" field of the city 'DC'
//          await updateDoc(userDocRef, {
//             active: true,
//          });
//       } catch (err: any) {
//          const errorCode = err.code;
//          setError(errorCode);
//       }
//    };
//    return { updateActiveUserById, error };
// };
