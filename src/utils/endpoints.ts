import { sleep } from "./sleep";

interface ICreateAnnouncementData {

}

export const createAnnouncement = async (data: ICreateAnnouncementData) => {
    console.log(data)
    await sleep(1000);

    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/announcements`

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
