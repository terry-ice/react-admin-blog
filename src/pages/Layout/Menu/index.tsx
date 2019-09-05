import { Icon, Menu as AntMenu } from "antd";
import { MenuProps as AntMenuProps } from "antd/lib/menu";
import React from "react";
import { Link } from "react-router-dom";

type MenuProps = {
	menu: Routers[];
} & AntMenuProps;

const renderMenuItem = (item: Routers) => (
	<AntMenu.Item key={item.path}>
		<Link to={item.redirect || item.path}>
			{item.icon && <Icon type={item.icon} />}
			<span className="nav-text">{item.title}</span>
		</Link>
	</AntMenu.Item>
);

const renderChildren = (item: Routers) => (
	<AntMenu.SubMenu
		key={item.path}
		title={
			<span>
				{item.icon && <Icon type={item.icon} />}
				<span className="nav-text">{item.title}</span>
			</span>
		}
	>
		{item.children!.map(itemOne => renderMenuItem(itemOne))}
	</AntMenu.SubMenu>
);

export default ({ menu, ...props }: MenuProps) => (
	<AntMenu {...props}>
		{menu.map(item =>
			item.children ? renderChildren(item) : renderMenuItem(item)
		)}
	</AntMenu>
);
