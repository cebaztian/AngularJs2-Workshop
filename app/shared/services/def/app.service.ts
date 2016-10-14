import { Observable } from 'rxjs';
import { NotificationMessage } from '../../models/notificationMessage.model';

export interface IAppService {
    notify():Observable<NotificationMessage>;
    wait():Observable<void>;
}

