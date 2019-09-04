import DelBtn from "@/components/DelBtn";
import CategoryContainer from "@/graphql/category";
import { fetchCategorySuccess, setCategoryInfo } from "@/redux/article/actions";
import { selectCategory } from "@/redux/article/selectors";
import { Divider, Table } from "antd";
import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { createSelector } from "reselect";
import ArticleList from "./style";

interface Props {
	readonly category: Category[];
	readonly history: any;
	readonly dispatch: any;
}

const List: React.SFC<Props> = ({ history, dispatch }) => {
	const [selectKey, setSelectKey] = useState<string[]>([]);
	const onSelectChange = (selectedRowKeys: string[]) => {
		setSelectKey(selectedRowKeys);
	};

	const rowSelection = {
		selectKey,
		onChange: onSelectChange,
		hideDefaultSelections: true
	};
	const columns = [
		{
			title: "名称",
			dataIndex: "name"
		},
		{
			title: "描述",
			dataIndex: "description"
		},
		{
			title: "别名",
			dataIndex: "slug"
		},
		{
			title: "Action",
			key: "action",
			render: (text: any, record: any) => {
				return (
					<>
						<span>
							<a
								onClick={() => {
									dispatch(setCategoryInfo(record));
									history.push(`/category/update`);
								}}
							>
								编辑
							</a>
							<Divider type="vertical" />
							<DelBtn id={record.id}>删除</DelBtn>
						</span>
					</>
				);
			}
		}
	];
	return (
		<ArticleList>
			<CategoryContainer>
				{({ categories: { loading, data } }: any) => {
					const dataList = data && data.categories ? data.categories : [];
					if (dataList.length) {
						dispatch(fetchCategorySuccess(dataList));
					}
					return (
						<Table
							loading={loading}
							className="articleList"
							rowSelection={rowSelection}
							columns={columns}
							dataSource={dataList}
						/>
					);
				}}
			</CategoryContainer>
		</ArticleList>
	);
};
const mapStateToProps = createSelector(
	selectCategory(),
	category => ({ category })
);

const withConnect = connect(mapStateToProps);
export default compose(
	withConnect,
	withRouter
)(List);
