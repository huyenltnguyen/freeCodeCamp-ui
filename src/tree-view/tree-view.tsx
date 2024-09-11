import React, { ReactNode } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MuiTreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";

// const useStyles = makeStyles({
// 	root: {
// 		height: 110,
// 		flexGrow: 1,
// 		maxWidth: 400,
// 	},
// });

interface TreeViewNode {
	id: string;
	label: ReactNode;
	children?: TreeViewNode[];
}

interface TreeViewProps {
	data: TreeViewNode;
}

export const TreeView = ({ data }: TreeViewProps) => {
	// const classes = useStyles();

	// Recursively render tree items
	const renderTree = (nodes: TreeViewNode) => (
		<TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.label}>
			{Array.isArray(nodes.children)
				? nodes.children.map((node) => renderTree(node))
				: null}
		</TreeItem>
	);

	return (
		<MuiTreeView
			defaultExpanded={["root"]}
			// className={classes.root}
			// defaultCollapseIcon={<ExpandMoreIcon />}
			// defaultExpandIcon={<ChevronRightIcon />}
		>
			{renderTree(data)}
		</MuiTreeView>
	);
};
