import {IRes} from "../types/axios.Res.type";
import {IAlbum} from "../interfaces/album.interface";
import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";


const albumService = {
    getAll:():IRes<IAlbum[]>=>axiosService.get(urls.albums)
}

export {
    albumService
}