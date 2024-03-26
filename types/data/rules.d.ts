export module DataTypes {

  export interface Mode {
    name: string;
    description: string;
  }

  export interface Rules {
    modes: Localized<Mode>[];
  }
}
