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
  teams?: Team[];
}

interface Team {
  acronym: string;
  logo: string;
}

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss'],
})
export class MatchesComponent implements OnInit {
  games: Game[] = gamesData;
  matches: any = matchesData;
  total: number = 0;

  constructor() {}

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
