'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { RoadmapFilters } from "./roadmap-filters";
import { RoadmapItem } from "./types";
import { RoadmapKanban } from "./roadmap-kanban";
import { RoadmapTimeline } from "./roadmap-timeline";
import { RoadmapViewToggle } from "./roadmap-view-toggle";
import { Suspense } from "react";

interface ClientRoadmapProps {
    products: { id: string; name: string }[];
    roadmapItems: RoadmapItem[];
}

export default function ClientRoadmap({ products, roadmapItems }: ClientRoadmapProps) {
    return (
        <div className="flex flex-col space-y-6">
            <Suspense fallback={<div className="h-8 w-full animate-pulse bg-background rounded"></div>}>
                <RoadmapFilters />
            </Suspense>

            <Tabs defaultValue="all" className="w-full">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                    <TabsList className="mb-0">
                        {products.map((product) => (
                            <TabsTrigger key={product.id} value={product.id}>
                                {product.name}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    <Suspense fallback={<div className="h-10 w-40 animate-pulse bg-background rounded"></div>}>
                        <RoadmapViewToggle />
                    </Suspense>
                </div>

                {products.map((product) => {
                    const filteredItems = product.id === "all"
                        ? roadmapItems
                        : roadmapItems.filter(
                            (item) =>
                                item.product
                                    .toLowerCase()
                                    .replace(/\s+/g, "-") === product.id,
                        );

                    return (
                        <TabsContent key={product.id} value={product.id} className="pt-2">
                            <Suspense
                                fallback={
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {[...Array(3)].map((_, i) => (
                                            <div key={i} className="h-64 animate-pulse bg-gray-100 rounded-lg"></div>
                                        ))}
                                    </div>
                                }
                            >
                                <RoadmapViewToggle.Content
                                    kanbanView={<RoadmapKanban items={filteredItems} />}
                                    timelineView={<RoadmapTimeline items={filteredItems} />}
                                />
                            </Suspense>
                        </TabsContent>
                    );
                })}
            </Tabs>
        </div>
    );
} 