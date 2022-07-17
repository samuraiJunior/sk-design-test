import { createSlice } from "@reduxjs/toolkit";

const MainSlice = createSlice({
    name: "Main",
    initialState: {
        cities: [
            {
                "id": "MOW",
                "name": "Москва"
            },
            {
                "id": "SPB",
                "name": "Санкт-Петербург"
            },
            {
                "id": "KZN",
                "name": "Казань"
            },
            {
                "id": "KDA",
                "name": "Краснодар"
            }
        ],
        sources: [
            "Инстаграм",
            "От друзей",
            "Реклама",
            "Поисковые системы",
            "Другое",],
            isFetching:false,
    },
    reducers: {

    }
})
export default MainSlice.reducer
//export const {}=MainSlice.actions