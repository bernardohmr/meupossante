import { sleep } from "./sleep";

interface ICreateAnnouncementData {

}

interface ICreateUserData {
    name: string;
    cpf: string;
    email: string;
    phone: string;
    password: string;
}

export const createAnnouncement = async (data: ICreateAnnouncementData) => {
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


export const createUser = async (data: ICreateUserData) => {
    await sleep(1000);

    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users`

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

export const auth = async (data: { email: string; password: string; }) => {
    await sleep(1000);

    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth`

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
