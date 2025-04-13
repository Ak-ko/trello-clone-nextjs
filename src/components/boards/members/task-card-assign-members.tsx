"use client";

import { boards, users as defaultUsers } from "@/data/boards";
import React, { useEffect, useMemo, useState } from "react";
import { Minus } from "lucide-react";
import { useParams } from "next/navigation";
import { UserT } from "@/@types/board";

import MemberList from "./member-list";
import MemberSelect from "./member-select";

export default function TaskCardAssignMembers({
    onSelect,
}: {
    onSelect?: (users: UserT[]) => void;
}) {
    const { id } = useParams();
    const boardId = Number(id);

    const [users, setUsers] = useState<UserT[]>(defaultUsers);
    const [search, setSearch] = useState("");

    const availableUsers = useMemo(() => {
        return users.filter((user) => {
            const isNotInBoard = !user?.boards?.some(
                (board) => board.id === boardId
            );
            const matchesSearch = user.name
                .toLowerCase()
                .includes(search.toLowerCase());
            return isNotInBoard && matchesSearch;
        });
    }, [users, search, boardId]);

    const selectedUsers = useMemo(() => {
        return users.filter((user) =>
            user?.boards?.some((board) => board.id === boardId)
        );
    }, [users, boardId]);

    useEffect(() => {
        onSelect?.(selectedUsers);
    }, [users]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const handleSelect = (userId: number) => {
        setUsers((prevUsers) =>
            prevUsers.map((user) =>
                user.id === userId
                    ? {
                          ...user,
                          boards: [
                              ...(user.boards ?? []),
                              ...boards.filter((b) => b.id === boardId),
                          ],
                      }
                    : user
            )
        );
    };

    const handleDeSelect = (userId: number) => {
        setUsers((prevUsers) =>
            prevUsers.map((user) =>
                user.id === userId
                    ? {
                          ...user,
                          boards: user.boards?.filter(
                              (board) => board.id !== boardId
                          ),
                      }
                    : user
            )
        );
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
                <MemberList members={availableUsers}>
                    {(user) => (
                        <MemberSelect
                            avaterClass="w-8 h-8"
                            textClass="text-xs"
                            member={user}
                            onSelect={handleSelect}
                        />
                    )}
                </MemberList>
            </div>

            <div className="py-5 border-t border-gray-300">
                <h1 className="font-bold">Selected Members</h1>
                <div className="my-3">
                    <MemberList members={selectedUsers}>
                        {(user) => (
                            <MemberSelect
                                avaterClass="w-8 h-8"
                                textClass="text-xs"
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
