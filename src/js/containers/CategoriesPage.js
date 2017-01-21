/**
 * Created by rustemk on 15.01.17.
 */
import React from "react"
import {connect} from "react-redux"

import {fetchCategories, addCategory, updateCategory, deleteCategory} from "../actions/categoriesActions"

@connect((store) => {
    return {
        categories: store.categories.categories
    };
})
export default class Layout extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchCategories());
    }

    addCategory() {
        this.props.dispatch(addCategory({name: "Food", icon: "food.png"}));
    }

    updateCategory(category) {
        category.name = "Rent";
        category.icon = "rent.png";
        this.props.dispatch(updateCategory(category));
    }

    deleteCategory(category) {
        this.props.dispatch(deleteCategory(category.id));
    }

    render() {
        const {categories} = this.props;
        if (!categories.length) {
            return <div>
                <button onClick={this.addCategory.bind(this)}>add new category</button>
            </div>;
        } else {
            const mappedCategories = this.props.categories.map(category =>
                <div key={category.id}>
                    {category.id} - {category.name} - {category.icon}
                    &nbsp;
                    <button onClick={() => this.updateCategory(category)}>
                        update
                    </button>
                    &nbsp;
                    <button onClick={() => this.deleteCategory(category)}>
                        delete
                    </button>
                </div>);
            return <div>
                {mappedCategories}
                <br/>
                <button onClick={this.addCategory.bind(this)}>add new category</button>
            </div>;
        }
    }
}
