import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise'
import { Observable } from 'rxjs';

import { NotificationMessage } from '../../models/notificationMessage.model';
import {IAppService} from '../def/app.service';

@Injectable()
export class AppService implements IAppService {
    notify(): Observable<NotificationMessage> {
        return null;
    }
    wait(): Observable<void> {
        return null;
    }
}