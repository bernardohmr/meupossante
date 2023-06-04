import { sleep } from "./sleep";

interface ICreateAnnouncementData {

}

export const createAnnouncement = async (data: ICreateAnnouncementData) => {
    console.log(data)
    await sleep(1000);

    const url = "http://localhost:3000/api/announcements"

    return fetch(url, {
        method: "POST",
        body: JSON.stringify(data)
    })
        .then(res => {
            console.log(JSON.stringify(res))

            if (!res.ok) throw res

            return res;
        })
        .catch(err => {
            console.log(JSON.stringify(err))
            throw err
        })
        .finally(() => console.log("finally"))
}
