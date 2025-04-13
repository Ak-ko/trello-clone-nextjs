"use client";

import { users } from "@/data/boards";
import React, { useState } from "react";
import { Minus } from "lucide-react";
import { UserT } from "@/@types/board";

import MemberList from "./member-list";
import MemberSelect from "./member-select";

export default function BoardAssignMembers() {
    const [filterUsers, setFilterUsers] = useState(users);
    const [selectedUsers, setSelectedUsers] = useState([] as UserT[]);

    const [search, setSearch] = useState("");

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearch(value);

        if (value.trim() === "") {
            setFilterUsers(users);
            return;
        }

        const filteredUsers = users.filter((user) =>
            user.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilterUsers(filteredUsers);
    };

    const handleSelect = (userId: number) => {
        const newSelectedUser = users
            .filter((user) => user.id === userId)
            .pop();

        if (!newSelectedUser) return;

        setSelectedUsers([...selectedUsers, newSelectedUser]);

        const newFilterUsers = filterUsers.filter((user) => user.id !== userId);
        setFilterUsers(newFilterUsers);
    };

    const handleDeSelect = (userId: number) => {
        const newDeselectUsers = selectedUsers.filter(
            (user) => user.id !== userId
        );
        setSelectedUsers(newDeselectUsers);

        const newFilterUsers = users.filter((user) => user.id === userId);
        setFilterUsers([...filterUsers, ...newFilterUsers]);
    };

    return (
        <div>
            <div className="mt-3">
                <input
                    type="text"
                    onChange={handleSearch}
                    value={search}
                    className="border p-2 border-gray-300 focus:outline-primary w-full block rounded"
                    placeholder="Search for members..."
                />
            </div>

            <div className="pb-5">
                <MemberList members={filterUsers}>
                    {(user) => (
                        <MemberSelect member={user} onSelect={handleSelect} />
                    )}
                </MemberList>
            </div>

            <div className="py-5 border-t border-gray-300">
                <h1 className="font-bold">Selected Members</h1>
                <div className="my-3">
                    <MemberList members={selectedUsers}>
                        {(user) => (
                            <MemberSelect
                                member={user}
                                onSelect={handleDeSelect}
                                variant="destructive"
                                icon={<Minus />}
                            />
                        )}
                    </MemberList>
                </div>
            </div>
        </div>
    );
}
