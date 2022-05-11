import Tree from "./tree";

const TreeList = () => {

    
    const treeData = [
        {
          id: 1,
      parentid:0,
          label: "Documents",
        },
        {
          id: 2,
      parentid:1,
          label: "Desktop"
        },
        {
          id: 3,
      parentid:2,
          label: "Downloads",
        },
        {
            key: "0",
            label: "Documents",
            icon: "fa fa-folder",
            title: "Documents Folder",
            children: [
              {
                key: "0-0",
                label: "Document 1-1",
                icon: "fa fa-folder",
                title: "Documents Folder",
                children: [
                  {
                    key: "0-1-1",
                    label: "Document-0-1.doc",
                    icon: "fa fa-file",
                    title: "Documents Folder",
                  },
                  {
                    key: "0-1-2",
                    label: "Document-0-2.doc",
                    icon: "fa fa-file",
                    title: "Documents Folder",
                  },
                  {
                    key: "0-1-3",
                    label: "Document-0-3.doc",
                    icon: "fa fa-file",
                    title: "Documents Folder",
                  },
                  {
                    key: "0-1-4",
                    label: "Document-0-4.doc",
                    icon: "fa fa-file",
                    title: "Documents Folder",
                  },
                ],
              },
            ],
          },
          {
            key: "1",
            label: "Desktop",
            icon: "fa fa-desktop",
            title: "Desktop Folder",
            children: [
              {
                key: "1-0",
                label: "document1.doc",
                icon: "fa fa-file",
                title: "Documents Folder",
              },
              {
                key: "0-0",
                label: "documennt-2.doc",
                icon: "fa fa-file",
                title: "Documents Folder",
              },
            ],
          },
          {
            key: "2",
            label: "Downloads",
            icon: "fa fa-download",
            title: "Downloads Folder",
            children: [],
          },
      ];
    return (
      <>
      
        <div >
            <h2>tree data</h2>
                <div >
                  <Tree data={treeData} />
               </div>
        </div>
      </>
    );
  };
  
  export default TreeList;