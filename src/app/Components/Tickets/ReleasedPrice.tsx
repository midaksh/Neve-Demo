import React from 'react';

type ReleasedPriceProps = {
  release: string;
  price: number;
  soldOut?: boolean;
};

const ReleasedPrice: React.FC<ReleasedPriceProps> = ({ release, price, soldOut = false }) => {
  if (soldOut) {
    return (
      <div className="flex flex-col gap-[var(--size-2xs)]">
        {/* Release + Sold Out tag (row) */}
        <div className="flex items-center gap-[var(--size-sm)]">
          <span
            className="text-ticket-header"
            style={{ fontFamily: 'Arial Narrow, sans-serif', opacity: 0.5, pointerEvents: 'none' }}
          >
            {release}
          </span>
          <span
            className="text-ticket-header"
            style={{
              fontFamily: 'Arial Narrow, sans-serif',
              paddingLeft: 'var(--size-xs)',
              paddingRight: 'var(--size-xs)',
              paddingTop: 'var(--size-2xs)',
              paddingBottom: 'var(--size-2xs)',
              backgroundColor: 'var(--ui-accent)'
            }}
          >
            SOLD OUT
          </span>
        </div>

        {/* Release price (muted) */}
        <div
          className="flex items-center gap-[var(--size-xs)]"
          style={{ opacity: 0.5, pointerEvents: 'none' }}
        >
          <span
            className="text-ticket-header"
            style={{ fontFamily: 'Arial Narrow, sans-serif', fontSize: 'var(--f-15)' }}
          >
            €
          </span>
          <span
            className="text-subText"
            style={{ fontFamily: 'Da Vinci, sans-serif', fontSize: 'var(--f-20)' }}
          >
            {price.toFixed(2)}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[var(--size-2xs)]">
      <span className="text-ticket-header" style={{ fontFamily: 'Arial Narrow, sans-serif' }}>
        {release}
      </span>
      <div className="flex items-center gap-[var(--size-xs)]">
        <span className="text-ticket-header" style={{ fontFamily: 'Arial Narrow, sans-serif' }}>
          €
        </span>
        <span className="text-subText" style={{ fontFamily: 'Da Vinci, sans-serif' }}>
          {price.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default ReleasedPrice;
