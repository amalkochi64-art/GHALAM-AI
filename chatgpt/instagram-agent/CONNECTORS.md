# Connector status — GHALAM Instagram Agent

Checked 2026-11-11.

## Windsor.ai / Instagram organic
- Connected Instagram account label: ghalam2021
- Account ID: 17841407130514542
- Available action schemas observed: create_image_post, create_carousel_post, create_video_post, create_story, create_comment, reply_to_comment, hide_comment, unhide_comment, delete_comment.
- Read fields were discovered from the live connector. Always call get_fields again before queries.
- These are organic publishing and comment moderation capabilities. No DM inbox or DM-send action appeared in the inspected action list.

## Metricool
- Brand label: ghalam2021
- Blog ID: 7108619
- Timezone: Asia/Tehran
- Available tools inspected include brand settings, scheduled posts, analytics metrics/data, best time to post, scheduling and review workflow.
- No Instagram DM inbox or reply tool appeared in the available Metricool tool list.

## Boundaries
- Scheduling/publishing and public comment actions require explicit user confirmation of exact content and destination.
- Never infer a permission from a connected account alone.
- To enable automated DM handling, connect a separate DM-capable provider and verify its current permissions and available actions.
- Do not store passwords, access tokens or secrets in these files.
