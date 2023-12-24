import { Module } from '@nestjs/common';
import { DatabaseModule } from './app/database/database.module';
import { ProductsModule } from './modules/products/products.module';
import { ReviewsModule } from './modules/reviews/reviews.module';
import { ContactUsModule } from './modules/contact-us/contact-us.module';
import { ProfilesModule } from './modules/profiles/profiles.module';
import { OrganizationsModule } from './modules/organizations/organizations.module';
import { UsersModule } from './modules/users/users.module';
import { ContributorsModule } from './modules/contributors/contributors.module';
import { AuthProvidersModule } from './modules/auth-providers/auth-providers.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { MedicationsModule } from './modules/medications/medications.module';
import { LocationsModule } from './modules/locations/locations.module';

@Module({
  imports: [
    DatabaseModule,
    ProductsModule,
    ReviewsModule,
    ContactUsModule,
    ProfilesModule,
    UsersModule,
    TasksModule,
    LocationsModule,
    MedicationsModule,
    ContributorsModule,
    OrganizationsModule,
    AuthProvidersModule,
  ],
})
export class AppModule {}
