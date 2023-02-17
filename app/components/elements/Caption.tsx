import clsx from 'clsx';

export function Caption({
  as: Component = 'h3',
  className,
  children,
  ...props
}: {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
  [key: string]: any;
}) {
  return (
    <Component {...props} className={className}>
      {/* Dot */}
      <span className="mr-1 inline-block h-2 w-2 rounded-full bg-current" />
      {children}
    </Component>
  );
}
