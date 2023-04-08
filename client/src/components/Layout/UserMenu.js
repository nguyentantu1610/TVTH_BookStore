import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <div>
      <div className="text-center dashboard-menu">
        <div className="list-group">
          <h4>Giao diện</h4>
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action"
          >
            Trang cá nhân
          </NavLink>

          <NavLink
            to="/dashboard/user/orders"
            className="list-group-item list-group-item-action"
          >
            Danh sách đơn hàng
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
