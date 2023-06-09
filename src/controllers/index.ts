import { sleep } from "../utils/sleep";

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
    const url = "/api/announcements"

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
    const url = "/api/users"

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
    const url = "/api/auth"

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
