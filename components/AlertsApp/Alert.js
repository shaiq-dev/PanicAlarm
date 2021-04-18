import CalIcon from 'assets/calIcon.svg';
import DirIcon from 'assets/directions.svg';
import ManualAlertIcon from 'assets/manualAlert.svg';
import AutoAlertIcon from 'assets/autoAlert.svg';
import { ALERTSCONFIG } from 'utils/constants';
import { fixSchemaAst } from '@graphql-tools/utils';

export default function Alert({
	alertName,
	firstOccurance,
	totalOccurances,
	IP,
	lastOccurance,
	type = ALERTSCONFIG.MANUAL,
}) {
	return (
		<div className="single-alert-wrapper">
			{/* Left Side Icon */}
			<div className="single-alert-icon">
				<div className={`icon ${type === ALERTSCONFIG.AUTO ? 'auto' : ''}`}>
					{getAlertIconType(type)}
				</div>
			</div>

			{/* Alert Body */}
			<div className="single-alert-content">
				<div className="pa-flex pa-px-1">
					<div className="single-alert-name">{alertName}</div>
					<div className="single-alert-time">{firstOccurance}</div>
				</div>
				<div className="pa-flex pa-px-1 pa-mb-05">
					<div className="single-alert-type">
						{type === ALERTSCONFIG.AUTO ? 'Automatic' : 'Press'} Alert
					</div>
				</div>
				<div
					className={`single-alert-event ${
						type === ALERTSCONFIG.AUTO ? 'auto' : ''
					}`}
				>
					<div className="event-icon">
						<CalIcon />
					</div>
					<div className="event-content pa-flex-c">
						<span className="event-content-title">
							{type === ALERTSCONFIG.AUTO ? 'Automatically' : 'Manually'}{' '}
							Triggered Alert
						</span>
						<span className="event-content-info">
							Occured {totalOccurances} Times, Last Occurance @ {lastOccurance}
						</span>
					</div>
				</div>
				<div className="single-alert-footer">
					<div className="pa-flex-c pa-px-1">
						<div>
							This alert was triggered from <a href="https://link.com">{IP}</a>
						</div>
						<div className="pa-flex pa-ac">
							<span>Location: Banglore Urban</span>
						</div>
					</div>
					<div className="pa-px-1 pa-flex pa-ac">
						<DirIcon />
						<a className="pa-ml-05" href="https://link.com">
							Get Directions
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

function getAlertIconType(iconType) {
	return iconType === ALERTSCONFIG.AUTO ? (
		<AutoAlertIcon />
	) : (
		<ManualAlertIcon />
	);
}