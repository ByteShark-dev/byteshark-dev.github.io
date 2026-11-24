# Digital Matter

First iteration of the ByteShark identity. The server-rendered hero works without JavaScript. The renderer samples the original logo images (color masks), maps each to a fixed-size point cloud, rotates in three dimensions and projects onto Canvas 2D. No additional dependencies. The point count is lower on mobile; the animation pauses offscreen, on hidden tabs and when reduced motion is requested. The logo buttons and pause control remain usable independently of animation. Localize the UI through the existing ES/EN flow; add new products in the LOGOS array and the view controls together.

Review checklist: compare all three silhouettes with their source images; test drag, logo switches during morph, pause/resume, reduced motion, keyboard focus, mobile scrolling, ES/EN switching, offscreen pause, failed image loads and all existing navigation. Browser visual verification is required before merging. No production URL/DNS/privacy changes in this iteration.
