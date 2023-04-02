import * as React from 'react';
import NAV_ITEMS from '../../API/constants';

const RenderSingleItem = ({
  data,
  level,
}: {
  data: typeof NAV_ITEMS[0];
  level?: number;
}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <React.Fragment>
      <div
        className={`nav-item`}
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <p>{data.title}</p>
        {hovered && <RenderNavItems data={data.childrens ?? ([] as any)} />}
      </div>
    </React.Fragment>
  );
};

const RenderNavItems = ({
  data,
  level = 0,
}: {
  data: typeof NAV_ITEMS;
  level?: number;
}) => {
  return (
    <div
      style={{
        marginLeft: level * 200,
        position: 'absolute',
        top: 0,
        width: 198,
      }}
    >
      {data.map((e) => {
        return <RenderSingleItem key={e.id} data={e} level={level} />;
      })}
    </div>
  );
};

export default function Test() {
  return (
    <div style={{ position: 'relative' }}>
      <RenderNavItems data={NAV_ITEMS} />
    </div>
  );
}

// extra code


{items.map((item) => (
	<li key={item.id} className={liClassName} >
		<a
			className='py-[3.8px] pl-[8px] hover:text-[rgb(50,146,170)] flex justify-between group hover:bg-[rgb(236,239,241)]'
			href='/'
		>
			{item.title}

			<span className='hidden group-hover:block text-[rgb(0,126,159)] -mb-2 -mt-[2px] material-symbols-outlined'>
				chevron_right
			</span>
		</a>
		
	</li>
))};

{item?.childrens && item?.childrens?.length > 0 && (
	<NavItemList
		items={item.childrens}
		className={'absolute top-0 left-[12.3rem] hidden group-hover:block'}
		liClassName='group'
	/>
)}
