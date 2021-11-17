import React from 'react';
import DocumentTree from '../../components/DocumentTree';

const DocumentTreeComp = () => {
    const treeData = [
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
              title: "Documents sub Folder",
              children: [
                {
                  key: "0-1-1",
                  label: "Document-0-1.doc",
                  icon: "fa fa-file",
                  title: "Documents sub sub Folder",
                },
                {
                  key: "0-1-2",
                  label: "Document-0-2.doc",
                  icon: "fa fa-file",
                  title: "Documents sub sub Folder",
                },
                {
                  key: "0-1-3",
                  label: "Document-0-3.doc",
                  icon: "fa fa-file",
                  title: "Documents sub sub Folder",
                },
                {
                  key: "0-1-4",
                  label: "Document-0-4.doc",
                  icon: "fa fa-file",
                  title: "Documents sub sub Folder",
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
              title: "Desktop sub Folder",
            },
            {
              key: "0-0",
              label: "documennt-2.doc",
              icon: "fa fa-file",
              title: "Desktop sub Folder",
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
        <div>
            <DocumentTree treeData={treeData}/>
        </div>
    )
}

export default DocumentTreeComp
