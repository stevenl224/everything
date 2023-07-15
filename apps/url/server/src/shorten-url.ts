import getDB from "./get-db";

async function shortenUrl(url: string): Promise<string> {
    const db = await getDB();
  
    const result = await db.run('INSERT INTO url (original) VALUES (?)', url);
    console.log(result);
    const id = result.lastID;
    const short = `http://localhost:3333/s/${id}`;
  
    return short;
  }

export default shortenUrl;