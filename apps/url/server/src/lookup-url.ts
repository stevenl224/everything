import getDB from "./get-db";

async function lookupUrl(shortenedId: number) {
    const db = await getDB();
  
    const result = await db.get(
      'SELECT original FROM url WHERE id = (?)',
      shortenedId
    );
    console.log(result);
    return result.original;
  }

export default lookupUrl;