---
title: White Ravens Publisher privacy policy
description: How White Ravens Publisher, the tool White Ravens uses to upload videos to its YouTube channel, uses YouTube API Services and handles data.
updated: '2026-09-21'
parent:
  href: /privacy/
  title: Privacy policy
---

This policy covers **White Ravens Publisher**, the tool White Ravens uses to upload its own videos to its YouTube channel, [youtube.com/@whiteravens20](https://www.youtube.com/@whiteravens20). It adds to our [general privacy policy](/privacy/), which covers our websites.

## 1. YouTube API Services

White Ravens Publisher uses **YouTube API Services**. Google's handling of the data involved is described in the [Google Privacy Policy](http://www.google.com/policies/privacy).

## 2. Who uses the tool, and who is responsible

Only White Ravens uses White Ravens Publisher, and only for its own channel. The tool has no public interface: nobody else can sign in to it, and it never accesses any other YouTube account or anyone else's personal data. Visiting our websites or watching our videos gives it no data about you.

The tool is run by the White Ravens maintainer, [pavlojs](https://github.com/pavlojs), who is responsible for the data described here. Contact: [kontakt@whiteravens.net](mailto:kontakt@whiteravens.net).

## 3. What the tool accesses

With the authorization of our channel's owner, given through Google's OAuth consent screen, the tool uses two permissions:

- **`youtube.upload`** — to upload our videos. Every video is uploaded as private; a person makes it public in YouTube Studio after checking it.
- **`youtube.readonly`** — to read our channel's name and ID, so it only ever uploads to the right channel, and the privacy status of the videos it uploaded, so it knows when one has been made public.

It uses these permissions for nothing else. It cannot edit or delete anything on the channel.

## 4. What the tool stores, and where

- **The authorization for our channel** — the tool's OAuth client credentials and a refresh token, stored on our own machines in files that only the maintainer and the tool can read.
- **Upload records** — for each video: its YouTube ID and link, title, file size, the channel it went to and the time of the upload. They let our publishing calendar link to the video and stop the tool from uploading the same video twice.
- **Publication status** — while a video is private, the tool checks its privacy status on YouTube and records the result with the time of the check, until the video is public.
- **Upload logs** — a log of each upload, which names the video, kept to diagnose failed uploads.

The tool stores no data about viewers or any other YouTube users.

## 5. How the data is used and shared

The data is used only to upload our videos and to follow them until they are published. We do not sell it, share it with third parties or use it for advertising. The tool shows no ads and no third-party content, has no web interface, and uses no cookies or other tracking technology.

The data leaves our own machines only in requests to YouTube API Services, and as the link to each published video in our publishing calendar, a Google Sheets spreadsheet. The notifications the tool sends to the maintainer name the project, never the video.

## 6. How long the data is kept

- **The authorization** — for as long as the tool is connected to our channel; we delete it when we disconnect the tool.
- **Everything obtained through YouTube API Services** — upload records, publication status and the links in our publishing calendar — is read again from YouTube every week and never kept longer than 30 days without being refreshed, as the YouTube API Services policies require. When a video is no longer on our channel, the next weekly check deletes its record and removes its link from the calendar.
- **Upload logs** — deleted after 30 days.
- **If YouTube cannot be reached** — for example after the tool's access is revoked — anything not refreshed for 30 days is deleted, and we delete the stored authorization and all data obtained through YouTube API Services within 30 days of the revocation.
- **On request** — if you believe the tool holds data about you, write to us and we will delete it within 7 days, as those policies require.

## 7. Revoking access

The tool's access to the channel can be revoked at any time on the [Google security settings page](https://security.google.com/settings/security/permissions).

## 8. Security

Only the maintainer can reach the tool and its stored data, and the authorization is never shown on screen or committed to any repository.

## 9. Your rights and changes

The rights described in [section 7 of our general privacy policy](/privacy/#7-your-rights) apply here too. When anything in this policy changes, we update this page and the date at the top.
