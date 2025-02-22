import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ imageName, title, description, price }) => {
    return (
        <div>
            <div class="row">
                
                <div class="col-3">
                    <img src={imageName} alt="menu item" class="itemImage"/>
                </div>
                <div class="col-1"></div>
                <div class="col-7">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <div class="row">
                    <div class="col-9">
                        <p>{price}</p>
                    </div>
                    <div class="col-3">
                        <button type="button" class="addButton">Add</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
