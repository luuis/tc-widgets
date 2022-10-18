import { Component, OnInit } from '@angular/core';
import {
  TwitchEmbedLayout,
  TwitchEmbed,
  TwitchEmbedTheme,
} from 'twitch-player';

@Component({
  selector: 'app-community-player',
  templateUrl: './community-player.component.html',
  styleUrls: ['./community-player.component.scss'],
})
export class CommunityPlayerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    /* const embed = new TwitchEmbed('twitch-embed', {
      width: 980,
      height: 480,
      channel: 'lla',
      layout: TwitchEmbedLayout.VIDEO_WITH_CHAT,
      theme: TwitchEmbedTheme.DARK,
      parent: ['localhost', 'www.esportscruelty.com'],
    }); */
  }
}
