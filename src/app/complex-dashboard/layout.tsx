import Login from "./@loggedIn/page";

export default function DashboardLayout({
    children,
    users,
    revenue,
    notifications,
    loggedIn
}: {
    children: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode;
    loggedIn: React.ReactNode;
}) {
    const isLoggedIn = true
    return isLoggedIn ? (
            <div>
                <div>{children}</div>
                <div style={{ display: "flex" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div>{users}</div>
                        <div>{revenue}</div>
                    </div>
                    <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
                </div>
            </div>
    ): (
        loggedIn
    )
}