export const Loader = async () => {
	const res = await fetch("http://localhost:3500/posts");
	if (!res.ok) throw Error("Could not fetch posts");
	return res.json();
}