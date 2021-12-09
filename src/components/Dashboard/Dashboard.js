import React, { useState } from "react";
import "./Dashboard.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch, faEllipsisV, faUsers } from "@fortawesome/free-solid-svg-icons";
import Popup from './Popup'


function Dashboard() {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <div className="dashboard">
                <div className="dashboard_container">
                    <div className="dashboard_inventory_button">
                        <button className="dashboard_button" onClick={togglePopup}>Create Inventory Ledger <FontAwesomeIcon
                            icon={faPlus}
                        /></button>
                    </div>
                    <div className="middle">
                    </div>
                    <div className="dashboard_searchbar">
                        <input
                            type="text"
                            placeholder="Search"
                        />
                        <FontAwesomeIcon className="search_icon" icon={faSearch} />
                    </div>
                    <div className="dashboard_selectbar">
                        <select class="browser-default">
                            <option value="" disabled selected>Choose your option</option>
                            <option value="1">My Documents</option>
                            <option value="2">Shared With Me</option>
                        </select>
                    </div>
                </div>
                <div className="dashboard_home">
                    <table className="dashboard_table">
                        <thead >
                            <tr>
                                <th className="column_1">Name</th>
                                <th className="column_2">Date Created</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="column_1">Inventory Ledger 01</td>
                                <td className="column_2">14th January 2021</td>
                                <td><FontAwesomeIcon
                                    icon={faEllipsisV}
                                    className="dot_icon"
                                /></td>
                            </tr>
                            <tr>
                                <td className="column_1">Inventory Ledger 01</td>
                                <td className="column_2">14th January 2021</td>
                                <td><FontAwesomeIcon
                                    icon={faEllipsisV}
                                    className="dot_icon"
                                /></td>
                            </tr>
                            <tr>
                                <td className="column_1">Inventory Ledger 01</td>
                                <td className="column_2">14th January 2021</td>
                                <td><FontAwesomeIcon
                                    icon={faEllipsisV}
                                    className="dot_icon"
                                /></td>

                            </tr>
                            <tr>
                                <td className="column_1">Inventory Ledger 01</td>
                                <td className="column_2">14th January 2021</td>
                                <td><FontAwesomeIcon
                                    icon={faEllipsisV}
                                    className="dot_icon"
                                /></td>

                            </tr>
                            <tr>
                                <td className="column_1">Inventory Ledger 01</td>
                                <td className="column_2">14th January 2021</td>
                                <td><FontAwesomeIcon
                                    icon={faEllipsisV}
                                    className="dot_icon"
                                /></td>

                            </tr>
                        </tbody>
                    </table>
                </div>
                {isOpen && <Popup
                    content={<>
                        <div className="create_popup">
                            <form className="popup_container">
                                <div className="popup_topic">
                                    <h2>CREATE INVENTORY LEDGER</h2>
                                </div>
                                <div className="popup_title">
                                    <p className="popup_heading">Title</p>
                                    <input
                                        type="text"
                                        className="title_input"
                                    />
                                </div>
                                <div className="popup_inventory">
                                    <p className="popup_heading">Opening Balances</p>
                                    <div className="popup_inventory_subtopics">
                                        <p>Date</p>
                                        <p>Quantity</p>
                                        <p>Unit Cost</p>
                                    </div>
                                    <input type="date" className="date_input" />
                                    <input type="text" className="quantity_input" />
                                    <input type="text" className="unitcost_input" />
                                </div>
                                <div className="popup_search">
                                    <p className="popup_heading">Share Inventory Ledger</p>
                                    <div className="popup_searchbar">
                                        <input type="text" placeholder="Search" className="share_input" />
                                        <FontAwesomeIcon className="search_icon" icon={faSearch} />
                                    </div>
                                </div>
                                <div className="popup_box">
                                    <div className="popup_search_box">
                                        <div className="search_box">
                                            <FontAwesomeIcon className="users_icon" icon={faUsers} style={{ marginTop: "16px", color: "#636363", fontSize: "17px" }} />
                                            <p>Add Participants</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="popup_button">
                                    <button className="popup_create_button">Done</button>
                                </div>
                            </form>
                        </div>
                    </>}
                    handleClose={togglePopup}
                />}
            </div>
        </>
    );
}

export default Dashboard;