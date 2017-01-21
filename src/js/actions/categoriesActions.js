/**
 * Created by rustemk on 15.01.17.
 */
import axios from "axios";

/**
 * Fetches all categories
 * @returns {{type: string, payload: *}}
 */
export const fetchCategories = () => ({
    type: "FETCH_CATEGORIES",
    payload: axios.get("http://localhost:4000/categories")
});

/**
 * Adds category
 * @param category - {name, icon} - category to add
 * @returns {{type: string, payload: *}}
 */
export const addCategory = (category) => ({
    type: "ADD_CATEGORY",
    payload: axios.post("http://localhost:4000/categories", category)
});

/**
 * Updates category
 * @param category - {id, name, icon} - category to update
 * @returns {{type: string, payload: *}}
 */
export const updateCategory = (category) => ({
    type: "UPDATE_CATEGORY",
    payload: axios.put("http://localhost:4000/categories/" + category.id, category)
});

/**
 * Deletes category
 * @param id - ID of deleting category
 * @returns {{type: string, payload: *}}
 */
export const deleteCategory = (id) => {
    // TODO: find out how to properly pass id to reducer using axios in payload
    axios.delete("http://localhost:4000/categories/" + id);
    return {
        type: "DELETE_CATEGORY",
        payload: id
    }
};