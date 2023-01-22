interface MenuItemsProps {
    id: number;
    novidade ?: any;
    label: string;
    icon ?: string;
    link ?: string;
    badge?:string;
    badgecolor?:string;
    subItems ?: any;
    isHeader ?: boolean
}

const menuItems: Array<MenuItemsProps> = [
    {
        id: 1,
        label: "Dashboards",
        isHeader : true
    },
    {
        id: 2,
        label: "Sales",
        icon: "monitor",
        link: "/sales",
        badge:"5+",
        badgecolor:"badge-soft-secondary"
    },
    {
        id: 139,
        label: "Analytics",
        icon: "pie-chart",
        link: "/dashboards-analytics"
    },
    {
        id: 3,
        label: "Applications",
        isHeader : true
    },
    {
        id: 4,
        label: "Calendar",
        icon: "calendar",
        link: "/calendar"
    },
    {
        id: 5,
        label: "Chat",
        icon: "message-square",
        link: "/chat",
        badge:"Hot",
        badgecolor:"badge-soft-danger"
    },
    {
        id: 6,
        label: "Kanban Board",
        icon: "trello",
        link: "/kanban-board"
    },
    {
        id: 7,
        label: "File Manager",
        icon: "folder",
        link: "/file-manager"
    },
    {
        id: 8,
        novidade: false,
        label: "Email",
        icon: "mail",
        link: "/#",
        subItems: [
            {
                id: 9,
                label: "Inbox",
                link: "/inbox",
                parentId: 8
            },
            {
                id: 10,
                label: "Read Email",
                link: "/read-email",
                parentId: 8
            }
        ]
    },
    {
        id: 11,
        novidade: false,
        label: "Contacts",
        icon: "book",
        link: "/#",
        subItems: [
            {
                id: 12,
                label: "User Grid",
                link: "/user-grid",
                parentId: 11
            },
            {
                id: 13,
                label: "User List",
                link: "/user-list",
                parentId: 11
            },
            {
                id: 140,
                label: "User Settings",
                link: "/user-settings",
                parentId: 11
            }
        ]
    },
    {
        id: 14,
        label: "Gallery",
        icon: "image",
        link: "/gallery"
    },
    {
        id: 15,
        novidade: false,
        label: "Projects",
        icon: "briefcase",
        link: "/#",
        subItems: [
            {
                id: 16,
                label: "Projects Grid",
                link: "/projects-grid",
                parentId: 15
            },
            {
                id: 17,
                label: "Projects List",
                link: "projects-list",
                parentId: 15
            },
            {
                id: 18,
                label: "Project Overview",
                link: "projects-overview",
                parentId: 15
            },
            {
                id: 19,
                label: "Create New",
                link: "projects-create",
                parentId: 15
            }
        ]
    },
    {
        id: 21,
        label: "Pages",
        isHeader : true
    },
    {
        id: 97,
        label: "Widgets",
        icon: "grid",
        link: "/widgets",
    },
    {
        id: 98,
        novidade: false,
        label: "Forms",
        icon: "edit-3",
        link: "/#",
        subItems: [
            {
                id: 99,
                label: "Basic Elements",
                link: "/form-elements",
                parentId: 98
            },
            {
                id: 100,
                label: "Validation",
                link: "/form-validation",
                parentId: 98
            },
            {
                id: 101,
                label: "Advanced Plugins",
                link: "/form-advanced",
                parentId: 98
            },
            {
                id: 102,
                label: "Editors",
                link: "/form-editors",
                parentId: 98
            },
            {
                id: 103,
                label: "File Upload",
                link: "/form-uploads",
                parentId: 98
            },
            {
                id: 104,
                label: "Wizard",
                link: "/form-wizard",
                parentId: 98
            },
            {
                id: 105,
                label: "Mask",
                link: "/form-mask",
                parentId: 98
            },
        ]
    },
    {
        id: 106,
        novidade: false,
        label: "Tables",
        icon: "database",
        link: "/#",
        subItems: [
            {
                id: 107,
                label: "Bootstrap Basic",
                link: "/tables-basic",
                parentId: 106
            },
            {
                id: 108,
                label: "Advance Tables",
                link: "/tables-advanced",
                parentId: 106
            },
        ]
    },
    {
        id: 107,
        novidade: false,
        label: "Apex Charts",
        icon: "bar-chart-2",
        link: "/#",
        subItems: [
            {
                id: 108,
                label: "Line",
                link: "/charts-line",
                parentId: 107
            },
            {
                id: 109,
                label: "Area",
                link: "/charts-area",
                parentId: 107
            },
            {
                id: 110,
                label: "Column",
                link: "/charts-column",
                parentId: 107
            },
            {
                id: 111,
                label: "Bar",
                link: "/charts-bar",
                parentId: 107
            },
            {
                id: 112,
                label: "Mixed",
                link: "/charts-mixed",
                parentId: 107
            },
            {
                id: 113,
                label: "Timeline",
                link: "/charts-timeline",
                parentId: 107
            },
            {
                id: 114,
                label: "Candlestick",
                link: "/charts-candlestick",
                parentId: 107
            },
            {
                id: 115,
                label: "Boxplot",
                link: "/charts-boxplot",
                parentId: 107
            },
            {
                id: 116,
                label: "Bubble",
                link: "/charts-bubble",
                parentId: 107
            },
            {
                id: 117,
                label: "Scatter",
                link: "/charts-scatter",
                parentId: 107
            },
            {
                id: 118,
                label: "Heatmap",
                link: "/charts-heatmap",
                parentId: 107
            },
            {
                id: 119,
                label: "Treemap",
                link: "/charts-treemap",
                parentId: 107
            },
            {
                id: 120,
                label: "Pie",
                link: "/charts-pie",
                parentId: 107
            },
            {
                id: 121,
                label: "Radialbar",
                link: "/charts-radialbar",
                parentId: 107
            },
            {
                id: 122,
                label: "Radar",
                link: "/charts-radar",
                parentId: 107
            },
            {
                id: 123,
                label: "Polararea",
                link: "/charts-polararea",
                parentId: 107
            },

        ]
    },
    {
        id: 124,
        novidade: false,
        label: "Icons",
        icon: "archive",
        link: "/#",
        subItems: [
            {
                id: 125,
                label: "Unicons",
                link: "/icons-unicons",
                parentId: 124
            },
            {
                id: 126,
                label: "Feather icons",
                link: "/icons-feathericons",
                parentId: 124
            },
            {
                id: 127,
                label: "Boxicons",
                link: "/icons-boxicons",
                parentId: 124
            },
            {
                id: 128,
                label: "Material Design",
                link: "/icons-materialdesign",
                parentId: 124
            },
            {
                id: 129,
                label: "Font Awesome 5",
                link: "/icons-fontawesome",
                parentId: 124
            },
        ]
    },
    {
        id: 130,
        novidade: false,
        label: "Maps",
        icon: "map-pin",
        link: "/#",
        subItems: [
            {
                id: 131,
                label: "Google",
                link: "/maps-google",
                parentId: 130
            },
            {
                id: 132,
                label: "Vector",
                link: "/maps-vector",
                parentId: 130
            },
            {
                id: 133,
                label: "Leaflet",
                link: "/maps-leaflet",
                parentId: 130
            },
        ]
    },
    {
        id: 134,
        novidade: false,
        label: "Multi Level",
        icon: "share-2",
        link: "/#",
        subItems: [
            {
                id: 135,
                label: "Level 1.1",
                link: "/#",
                parentId: 134
            },
            {
                id: 136,
                label: "Level 1.2",
                link: "/#",
                parentId: 134,
                subItems: [
                    {
                        id: 137,
                        label: "Level 2.1",
                        link: "/#",
                        parentId: 136
                    },
                    {
                        id: 138,
                        label: "Level 2.2",
                        link: "/#",
                        parentId: 136
                    }
                ]
            }
        ]
    },
];

export { menuItems };
