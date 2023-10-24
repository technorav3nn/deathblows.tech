import type { Component } from "vue";

export interface ProjectTechnologies {
	name: string;
	url: string;
	icon: Component;
}

export interface Project {
	name: string;
	description: string;
	url: string;
}

export const projects: Project[] = [
	{
		name: "Portfolio",
		description: "My portfolio website",
		url: "https://github.com/technorav3nn/deathblows.tech",
	},
	{
		name: "Brawl Tracker",
		description: "A brawl stars tracker im working on",
		url: "https://github.com/technorav3nn/brawltracker",
	},
	{
		name: "Rust-Ware",
		description: "Custom Script-Ware Mac client written in Rust, with a custom UI",
		url: "https://github.com/technorav3nn/rust-ware",
	},
];
