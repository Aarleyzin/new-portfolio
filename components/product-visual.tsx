import {
  Activity,
  ArrowUpRight,
  Check,
  ChevronRight,
  CircleDollarSign,
  MapPin,
  MessageCircle,
  ShoppingBag,
  Sparkles,
  UtensilsCrossed,
  Users,
} from 'lucide-react';

import type { ProductVisual as ProductVisualType } from '@/data/content';
import { cn } from '@/lib/utils';

interface ProductVisualProps {
  type: ProductVisualType;
}

const copy = {
  overview: 'Overview',
  revenue: 'Revenue today',
  orders: 'Orders',
  activeTables: 'Active tables',
  glucose: 'Glucose overview',
  inRange: 'In target range',
  insight: 'Daily insight',
  roadmap: 'Your Australia roadmap',
  completed: 'completed',
  nextStep: 'Next step',
};

function Base90Visual() {

  return (
    <div className="product-visual product-visual-base90" aria-hidden="true">
      <div className="dashboard-frame">
        <aside className="dashboard-sidebar">
          <div className="mock-logo">B90</div>
          {[UtensilsCrossed, ShoppingBag, Users, CircleDollarSign].map((Icon, index) => (
            <div className={cn('sidebar-icon', index === 0 && 'sidebar-icon-active')} key={index}>
              <Icon size={16} strokeWidth={1.8} />
            </div>
          ))}
        </aside>
        <div className="dashboard-main">
          <div className="mock-toolbar">
            <div>
              <span className="mock-kicker">Base90</span>
              <strong>{copy.overview}</strong>
            </div>
            <span className="mock-avatar">AO</span>
          </div>
          <div className="metric-grid">
            <article>
              <span>{copy.revenue}</span>
              <strong>R$ 12.480</strong>
              <small>+18.4%</small>
            </article>
            <article>
              <span>{copy.orders}</span>
              <strong>186</strong>
              <small>+24</small>
            </article>
            <article>
              <span>{copy.activeTables}</span>
              <strong>24</strong>
              <small>8 free</small>
            </article>
          </div>
          <div className="dashboard-lower">
            <article className="revenue-chart">
              <div className="chart-head">
                <span>Revenue</span>
                <strong>Last 7 days</strong>
              </div>
              <svg viewBox="0 0 520 150" role="presentation">
                <path d="M0 127 C56 116, 72 91, 123 101 S191 119, 234 77 S300 43, 348 58 S414 91, 520 18" fill="none" stroke="currentColor" strokeWidth="3" />
                <path d="M0 127 C56 116, 72 91, 123 101 S191 119, 234 77 S300 43, 348 58 S414 91, 520 18 L520 150 L0 150 Z" fill="url(#areaFill)" />
                <defs>
                  <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </article>
            <article className="order-list">
              <span>Live orders</span>
              {['#1048', '#1047', '#1046'].map((order, index) => (
                <div key={order}>
                  <span>{order}</span>
                  <strong>{['R$ 146', 'R$ 89', 'R$ 214'][index]}</strong>
                </div>
              ))}
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

function GlicoVisual() {

  return (
    <div className="product-visual product-visual-glico" aria-hidden="true">
      <div className="glico-orbit glico-orbit-one" />
      <div className="glico-orbit glico-orbit-two" />
      <div className="phone-shell">
        <div className="phone-sensor" />
        <div className="phone-content">
          <div className="phone-topline">
            <span>9:41</span>
            <Activity size={16} />
          </div>
          <div className="glico-heading">
            <span>{copy.glucose}</span>
            <strong>Good morning, Arlindo</strong>
          </div>
          <article className="glucose-card">
            <div className="glucose-value">
              <strong>112</strong>
              <span>mg/dL</span>
            </div>
            <span className="range-badge">{copy.inRange}</span>
            <svg viewBox="0 0 280 94" role="presentation">
              <path d="M0 68 C34 53, 53 72, 82 58 S132 31, 163 46 S211 79, 280 24" fill="none" stroke="currentColor" strokeWidth="3" />
            </svg>
          </article>
          <article className="ai-insight">
            <span className="insight-icon"><Sparkles size={16} /></span>
            <div>
              <span>{copy.insight}</span>
              <p>Your levels remained stable after breakfast.</p>
            </div>
            <ChevronRight size={18} />
          </article>
          <div className="phone-actions">
            <button>+ Glucose</button>
            <button>+ Meal</button>
          </div>
        </div>
      </div>
      <div className="floating-health-card">
        <span>7 day average</span>
        <strong>108 mg/dL</strong>
        <small>82% in range</small>
      </div>
    </div>
  );
}

function AustraliaVisual() {

  return (
    <div className="product-visual product-visual-australia" aria-hidden="true">
      <div className="australia-frame">
        <div className="australia-nav">
          <strong>PARTIU<span>AU</span></strong>
          <div>
            <span>Roadmap</span>
            <span>Resources</span>
            <span>Community</span>
          </div>
          <span className="mock-avatar">AO</span>
        </div>
        <div className="roadmap-layout">
          <div className="roadmap-copy">
            <span className="mock-kicker">{copy.roadmap}</span>
            <h3>Sydney, here you come.</h3>
            <p>A clear plan, personalized around your goals, profile and timeline.</p>
            <div className="roadmap-progress">
              <div><span style={{ width: '68%' }} /></div>
              <strong>68% {copy.completed}</strong>
            </div>
            <article className="next-step-card">
              <span>{copy.nextStep}</span>
              <strong>Review your visa pathway</strong>
              <ArrowUpRight size={18} />
            </article>
          </div>
          <div className="roadmap-steps">
            {[
              ['Profile completed', true],
              ['Visa pathway', true],
              ['Financial plan', false],
              ['Documentation', false],
            ].map(([step, done], index) => (
              <article key={String(step)}>
                <span className={cn('roadmap-step-index', done && 'roadmap-step-done')}>
                  {done ? <Check size={15} /> : index + 1}
                </span>
                <div>
                  <strong>{step}</strong>
                  <span>{done ? 'Complete' : 'In progress'}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="australia-assistant">
          <MessageCircle size={17} />
          <span>Ask your AI migration assistant</span>
        </div>
        <MapPin className="australia-pin" size={24} />
      </div>
    </div>
  );
}

export function ProductVisual({ type }: ProductVisualProps) {
  if (type === 'base90') return <Base90Visual />;
  if (type === 'glico') return <GlicoVisual />;
  return <AustraliaVisual />;
}

