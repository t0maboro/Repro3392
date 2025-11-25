#import "RCTCustomNativeComponent.h"

#import <react/renderer/components/AppSpec/ComponentDescriptors.h>

using namespace facebook::react;

@interface RCTCustomNativeComponent () <RCTComponentViewProtocol>
@end

@implementation RCTCustomNativeComponent {}

-(instancetype)init
{
  if(self = [super init]) {
    NSLog(@"native component initialized successfully");
  }
  return self;
}

#pragma mark - RCTComponentViewProtocol

+ (BOOL)shouldBeRecycled
{
  // There won't be tens of instances of this component usually & it's easier for now.
  // We could consider enabling it someday though.
  return NO;
}

+ (ComponentDescriptorProvider)componentDescriptorProvider
{
  return concreteComponentDescriptorProvider<CustomNativeComponentComponentDescriptor>();
}

@end
