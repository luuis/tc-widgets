import { Component, OnInit } from '@angular/core';
import gamesData from '../../games.json';
import matchesData from '../../matches.json';

interface Game {
  slug: string;
  name: string;
  url: string;
}

interface MatchesMap {
  [key: string]: Match[];
}

interface Match {
  timestamp: string;
  duration: number;
  type: string;
  tournament: string;
  tournamentLogo?: string;
  title?: string;
  teams?: Team[];
}

interface Team {
  name: string;
  acronym: string;
  logo: string;
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  games: Game[] = gamesData;
  matches: any = matchesData;
  total: number = 0;
  mergedMatches: any;

  constructor() {
    this.matches.valorant.forEach((element: any) => {
      element.game = 'VALORANT';
      element.gameSlug = 'valorant';
    });
    this.matches.freefire.forEach((element: any) => {
      element.game = 'Free Fire';
      element.gameSlug = 'freefire';
    });
    this.matches.rainbow6.forEach((element: any) => {
      element.game = 'valorant';
      element.gameSlug = 'rainbow6';
    });
    this.matches.halo.forEach((element: any) => {
      element.game = 'Halo Infinite';
      element.gameSlug = 'halo';
    });

    this.mergedMatches = this.matches.valorant.concat(
      this.matches.freefire,
      this.matches.rainbow6,
      this.matches.halo
    );

    this.mergedMatches.sort((a: any, b: any) => {
      return a.timestamp - b.timestamp;
    });

    this.mergedMatches = this.mergedMatches.filter(
      (m: { timestamp: string; duration: number }) =>
        this.status(m.timestamp, m.duration) != 0
    );
  }

  ngOnInit(): void {
    var now = new Date().getTime();
    this.matches.valorant = this.matches.valorant.filter((match: any) => {
      var start = new Date(match.timestamp).getTime();
      var end = start + match.duration * 60 * 1000;
      return end > now;
    });
    this.matches.freefire = this.matches.freefire.filter((match: any) => {
      var start = new Date(match.timestamp).getTime();
      var end = start + match.duration * 60 * 1000;
      return end > now;
    });
    this.matches.rainbow6 = this.matches.rainbow6.filter((match: any) => {
      var start = new Date(match.timestamp).getTime();
      var end = start + match.duration * 60 * 1000;
      return end > now;
    });
    this.matches.halo = this.matches.halo.filter((match: any) => {
      var start = new Date(match.timestamp).getTime();
      var end = start + match.duration * 60 * 1000;
      return end > now;
    });

    this.total =
      this.matches.valorant.length +
      this.matches.freefire.length +
      this.matches.rainbow6.length +
      this.matches.halo.length;
  }

  status(timestamp: string, duration: number) {
    var now = new Date().getTime();
    var start = new Date(timestamp).getTime();
    var end = start + duration * 60 * 1000;

    // 0: Past
    // 1: Upcoming
    // 2: Live
    return end < now ? 0 : start > now ? 1 : 2;
  }

  countdown(matchTimestamp: string, matchDuration: number) {
    var matchTime = new Date(matchTimestamp).getTime();
    var now = new Date().getTime();
    var distance = matchTime - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    return (
      (days > 0 ? days + 'd ' : '') +
      (hours > 0 ? hours + 'h ' : '') +
      minutes +
      'm '
    );
  }
}
